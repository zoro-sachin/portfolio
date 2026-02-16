import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

// Keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Styled Components
const SectionContainer = styled.section`
  padding: 4rem 0;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const RepoTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const RepoDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RepoFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TechBadge = styled.span`
  background: rgba(102, 126, 234, 0.15);
  color: #81a1f8;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const UpdateDate = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
`;

// Skeleton Loading Components
const SkeletonCard = styled(Card)`
  pointer-events: none;
  animation: none;
  opacity: 1;
`;

const SkeletonBox = styled.div`
  background: #222;
  background-image: linear-gradient(to right, #222 0%, #333 20%, #222 40%, #222 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.5s linear infinite forwards;
  border-radius: 4px;
`;

const SkeletonHeader = styled(SkeletonBox)`
  width: 60%;
  height: 24px;
  margin-bottom: 1rem;
`;

const SkeletonText = styled(SkeletonBox)`
  width: 100%;
  height: 60px;
  margin-bottom: 1.5rem;
`;

const SkeletonFooter = styled(SkeletonBox)`
  width: 40%;
  height: 20px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background: rgba(255, 50, 50, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 50, 50, 0.1);
  margin-top: 2rem;
`;

const RetryButton = styled.button`
  background: var(--primary-gradient);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const GitHubProjects = ({ username = 'zoro-sachin' }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);

      // Sort by updated_at and take first 6
      const sortedRepos = response.data
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 6);

      setRepos(sortedRepos);
    } catch (err) {
      console.error('Error fetching repos:', err);
      setError('Failed to fetch repositories. Please check your internet connection or try again later.');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <SectionContainer>
        <Grid>
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i}>
              <SkeletonHeader />
              <SkeletonText />
              <RepoFooter>
                <SkeletonFooter />
                <SkeletonFooter style={{ width: '30%' }} />
              </RepoFooter>
            </SkeletonCard>
          ))}
        </Grid>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer>
        <ErrorContainer>
          <p>{error}</p>
          <RetryButton onClick={fetchRepos}>Retry Fetch</RetryButton>
        </ErrorContainer>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <Grid>
        {repos.map((repo, index) => (
          <Card
            key={repo.id}
            as="a"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            delay={`${index * 0.1}s`}
          >
            <div>
              <RepoHeader>
                <RepoTitle>{repo.name}</RepoTitle>
                <FaGithub size={20} color="rgba(255,255,255,0.7)" />
              </RepoHeader>
              <RepoDescription>
                {repo.description || 'No description provided for this repository.'}
              </RepoDescription>
            </div>

            <RepoFooter>
              <TechStack>
                {repo.language && <TechBadge>{repo.language}</TechBadge>}
                <Stats>
                  <span><FaStar size={14} /> {repo.stargazers_count}</span>
                  <span><FaCodeBranch size={14} /> {repo.forks_count}</span>
                </Stats>
              </TechStack>
              <UpdateDate>Last updated: {formatDate(repo.updated_at)}</UpdateDate>
            </RepoFooter>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default GitHubProjects;
