import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, GitCommit, GitPullRequest, Star, Clock, ExternalLink } from "lucide-react";

const GitHubActivity = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in real implementation, this would come from GitHub API
  const mockActivity = {
    profile: {
      username: "Jayluci4",
      name: "Jayant Lohia",
      bio: "AI Engineer & Data Scientist building production-ready ML systems",
      location: "Guwahati, India",
      followers: 128,
      following: 45,
      publicRepos: 23,
      contributionScore: 847
    },
    recentCommits: [
      {
        id: 1,
        message: "feat: implement hybrid ranking with cross-encoder reranking",
        repo: "investor-matching-engine",
        branch: "main",
        timestamp: "2 hours ago",
        additions: 156,
        deletions: 23
      },
      {
        id: 2,
        message: "fix: optimize vector search performance for large datasets",
        repo: "semantic-search-pipeline",
        branch: "optimization",
        timestamp: "5 hours ago",
        additions: 89,
        deletions: 12
      },
      {
        id: 3,
        message: "docs: add comprehensive RAG system documentation",
        repo: "self-rag-framework",
        branch: "main",
        timestamp: "1 day ago",
        additions: 234,
        deletions: 5
      },
      {
        id: 4,
        message: "refactor: improve NLP classification pipeline architecture",
        repo: "startup-taxonomy-classifier",
        branch: "main",
        timestamp: "2 days ago",
        additions: 67,
        deletions: 45
      }
    ],
    topRepos: [
      {
        name: "investor-matching-engine",
        description: "Production-ready RAG system for investor-founder matching",
        language: "Python",
        stars: 47,
        forks: 12,
        lastUpdated: "2 hours ago",
        topics: ["rag", "fastapi", "pinecone", "machine-learning"]
      },
      {
        name: "semantic-search-pipeline",
        description: "High-performance semantic search with vector databases",
        language: "Python",
        stars: 34,
        forks: 8,
        lastUpdated: "5 hours ago",
        topics: ["semantic-search", "vector-database", "nlp"]
      },
      {
        name: "startup-taxonomy-classifier",
        description: "NLP pipeline for classifying startups across 1K+ categories",
        language: "Python",
        stars: 28,
        forks: 6,
        lastUpdated: "2 days ago",
        topics: ["nlp", "classification", "machine-learning"]
      }
    ],
    stats: {
      totalContributions: 1247,
      currentStreak: 23,
      longestStreak: 67,
      thisWeek: 15,
      thisMonth: 89
    }
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getCommitTypeColor = (message: string) => {
    if (message.startsWith('feat:')) return 'primary';
    if (message.startsWith('fix:')) return 'accent';
    if (message.startsWith('docs:')) return 'primary';
    if (message.startsWith('refactor:')) return 'accent';
    return 'primary';
  };

  const getCommitTypeLabel = (message: string) => {
    if (message.startsWith('feat:')) return 'Feature';
    if (message.startsWith('fix:')) return 'Fix';
    if (message.startsWith('docs:')) return 'Docs';
    if (message.startsWith('refactor:')) return 'Refactor';
    return 'Update';
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'Python': return 'bg-yellow-500';
      case 'JavaScript': return 'bg-yellow-400';
      case 'TypeScript': return 'bg-blue-500';
      case 'Go': return 'bg-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <section id="github-activity" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Live <span className="text-gradient">GitHub Activity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time updates from my development workflow
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Loading Skeletons */}
              {[1, 2, 3].map((i) => (
                <Card key={i} className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="animate-pulse">
                      <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-muted rounded w-full mb-2"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-activity" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Live <span className="text-gradient">GitHub Activity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time updates from my development workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Stats */}
            <div className="lg:col-span-1">
              <Card className="glass-card border-border/50 sticky top-24">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{mockActivity.profile.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">@{mockActivity.profile.username}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{mockActivity.profile.publicRepos}</div>
                        <div className="text-xs text-muted-foreground">Repositories</div>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent">{mockActivity.profile.followers}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>This Week</span>
                        <span className="font-semibold text-primary">{mockActivity.stats.thisWeek} commits</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Current Streak</span>
                        <span className="font-semibold text-accent">{mockActivity.stats.currentStreak} days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Contributions</span>
                        <span className="font-semibold text-primary">{mockActivity.stats.totalContributions}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full gradient-primary text-white"
                      onClick={() => window.open('https://github.com/Jayluci4', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Visit GitHub Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Commits */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitCommit className="h-5 w-5 text-primary" />
                    Recent Commits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockActivity.recentCommits.map((commit) => (
                      <div key={commit.id} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge 
                              variant="outline" 
                              className={`border-${getCommitTypeColor(commit.message)}/30 text-${getCommitTypeColor(commit.message)} text-xs`}
                            >
                              {getCommitTypeLabel(commit.message)}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{commit.repo}</span>
                          </div>
                          <p className="text-sm font-medium mb-1">{commit.message}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {commit.timestamp}
                            </div>
                            <span className="text-green-500">+{commit.additions}</span>
                            <span className="text-red-500">-{commit.deletions}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Repositories */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Featured Repositories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockActivity.topRepos.map((repo, index) => (
                      <div key={index} className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors group">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold group-hover:text-gradient transition-colors">
                            {repo.name}
                          </h4>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 ${getLanguageColor(repo.language)} rounded-full`}></div>
                            {repo.language}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitPullRequest className="h-3 w-3" />
                            {repo.forks}
                          </div>
                          <span>Updated {repo.lastUpdated}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;