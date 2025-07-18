import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";

const BlogInsights = () => {
  const articles = [
    {
      id: 1,
      title: "Building Production-Ready RAG Systems: Lessons from 150K+ Users",
      excerpt: "Deep dive into the architecture decisions, performance optimizations, and scaling challenges of building a RAG system that serves real users in production.",
      category: "AI Engineering",
      readTime: "12 min read",
      publishDate: "2024-01-15",
      views: "2.3K",
      tags: ["RAG", "Production", "Vector Search", "Performance"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "The Hidden Challenges of NLP Classification at Scale",
      excerpt: "What happens when you need to classify 200K+ documents across 1,000+ categories? A technical deep-dive into hierarchical classification, class imbalance, and achieving 99.99% accuracy.",
      category: "NLP",
      readTime: "8 min read",
      publishDate: "2024-01-08",
      views: "1.8K",
      tags: ["NLP", "Classification", "Machine Learning", "Scale"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Vector Search Performance: Beyond Basic Similarity",
      excerpt: "Exploring advanced vector search techniques, including cross-encoder reranking, dense-sparse fusion, and exponential boosting for better relevance.",
      category: "Vector Search",
      readTime: "10 min read",
      publishDate: "2024-01-01",
      views: "1.5K",
      tags: ["Vector Search", "Information Retrieval", "Ranking"],
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "From Startup to Scale: ML Engineering Best Practices",
      excerpt: "Practical lessons learned from building ML systems in fast-growing startups, covering everything from MVP to production-ready infrastructure.",
      category: "ML Engineering",
      readTime: "15 min read",
      publishDate: "2023-12-20",
      views: "3.1K",
      tags: ["ML Engineering", "Startup", "Best Practices", "Infrastructure"],
      featured: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { name: "AI Engineering", count: 8, color: "primary" },
    { name: "NLP", count: 6, color: "accent" },
    { name: "Vector Search", count: 4, color: "primary" },
    { name: "ML Engineering", count: 5, color: "accent" }
  ];

  const stats = [
    { icon: <BookOpen className="h-5 w-5" />, label: "Articles", value: "23" },
    { icon: <Users className="h-5 w-5" />, label: "Readers", value: "12K+" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Monthly Views", value: "2.4K" }
  ];

  return (
    <section id="blog-insights" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Deep dives into AI engineering, production ML systems, and lessons learned from building at scale
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-primary">{stat.icon}</div>
                <span><strong>{stat.value}</strong> {stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-card border-border/50 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div 
                        key={category.name}
                        className={`flex items-center justify-between p-3 rounded-lg bg-${category.color}/10 hover:bg-${category.color}/20 transition-colors cursor-pointer`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="outline" className={`border-${category.color}/30`}>
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Featured Articles */}
                <div className="grid md:grid-cols-2 gap-6">
                  {articles.filter(article => article.featured).map((article) => (
                    <Card 
                      key={article.id}
                      className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <div className="text-4xl text-primary/30">📊</div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-primary/20 text-primary">
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-3 group-hover:text-gradient transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {article.views}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-between hover:bg-primary/10"
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* More Articles */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">More Articles</h3>
                  {articles.filter(article => !article.featured).map((article) => (
                    <Card 
                      key={article.id}
                      className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-2xl text-primary/30">📝</div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="border-primary/30 text-primary">
                                {article.category}
                              </Badge>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                                <span>{article.readTime}</span>
                                <span>{article.views} views</span>
                              </div>
                            </div>
                            
                            <h4 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-colors">
                              {article.title}
                            </h4>
                            
                            <p className="text-muted-foreground mb-3 line-clamp-2">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {article.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Call to Action */}
                <Card className="glass-card border-border/50 text-center">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
                    <p className="text-muted-foreground mb-6">
                      Subscribe to get notified about new technical articles and AI engineering insights.
                    </p>
                    <Button className="gradient-primary text-white">
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;