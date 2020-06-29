import useSWR from 'swr';

interface InternalGithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: unknown | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: unknown | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null | {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface GithubRepo extends Omit<InternalGithubRepo, 'pushed_at' | 'updated_at' | 'created_at'> {
  created_at: number;
  updated_at: number;
  pushed_at: number;
}

export interface GithubStatistics {
  totalStars: number;
  lastUpdated: number;
  languages: string[];
  lastRepos: GithubRepo[];
}

export interface GithubActivity {
  all: number[];
  owner: number[];
}

const GITHUB_TOKEN = 'adacc18798577e139108d4439dbec4416330503b';

export function useRepos(orgName: string) {
  const { data, ...other } = useGithubSwr<InternalGithubRepo[]>(`https://api.github.com/orgs/${orgName}/repos`);
  return {
    ...other,
    data:
      data &&
      data.map((repo) => ({
        ...repo,
        created_at: new Date(repo.created_at).getTime(),
        updated_at: new Date(repo.updated_at).getTime(),
        pushed_at: new Date(repo.pushed_at).getTime(),
      })),
  };
}

function useGithubSwr<T>(url: string) {
  return useSWR<T>(url, ghGet);
}

const ghGet = async <T>(url: string): Promise<T> => {
  return fetch(url, {
    headers: { Authorization: `token ${GITHUB_TOKEN}`, 'content-type': 'application/json' },
  }).then((response) => response.json());
};

export const calculateStats = (repos: GithubRepo[], lastReposCount: number = 6): GithubStatistics => {
  const sortedByLastUpdate = [...repos].sort((a, b) => b.updated_at - a.updated_at);
  const lastUpdated = sortedByLastUpdate[0].updated_at;
  let totalStars = 0;
  const languageCount = new Map<string, number>();
  for (const repo of repos) {
    totalStars += repo.stargazers_count;
    if (repo.language !== null) {
      const count = languageCount.get(repo.language) || 0;
      languageCount.set(repo.language, count + 1);
    }
  }

  const languages = Array.from(languageCount.keys()).sort(
    (lang1, lang2) => (languageCount.get(lang2) || 0) - (languageCount.get(lang1) || 0),
  );
  const stats: GithubStatistics = {
    totalStars,
    lastUpdated,
    languages,
    lastRepos: sortedByLastUpdate.slice(0, lastReposCount),
  };
  return stats;
};
