import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ProjectSkeleton = () => (
  <Card className="glass-card border-border/50">
    <CardHeader className="p-0">
      <Skeleton className="w-full h-48 rounded-t-lg" />
    </CardHeader>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-6 w-full mb-3" />
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-6 w-16" />
        ))}
      </div>
      <Skeleton className="h-10 w-full" />
    </CardContent>
  </Card>
);

export const AboutSkeleton = () => (
  <div className="space-y-6">
    <div className="text-center">
      <Skeleton className="h-12 w-48 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto" />
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="glass-card border-border/50">
          <CardContent className="p-6">
            <Skeleton className="h-8 w-full mb-3" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-6 w-16" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const CaseStudySkeleton = () => (
  <div className="space-y-8">
    {[1, 2].map((i) => (
      <Card key={i} className="glass-card border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Skeleton className="h-6 w-24" />
                <div className="flex gap-4">
                  {[1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-4 w-16" />
                  ))}
                </div>
              </div>
              <Skeleton className="h-8 w-full mb-2" />
            </div>
            <Skeleton className="h-8 w-8" />
          </div>
        </CardHeader>
      </Card>
    ))}
  </div>
);

export const BlogSkeleton = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {[1, 2, 3, 4].map((i) => (
      <Card key={i} className="glass-card border-border/50">
        <CardHeader className="p-0">
          <Skeleton className="w-full h-48 rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-6">
          <Skeleton className="h-6 w-20 mb-3" />
          <Skeleton className="h-6 w-full mb-3" />
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {[1, 2, 3].map((j) => (
              <Skeleton key={j} className="h-6 w-16" />
            ))}
          </div>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    ))}
  </div>
);

export const GitHubSkeleton = () => (
  <div className="grid lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1">
      <Card className="glass-card border-border/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div>
              <Skeleton className="h-6 w-24 mb-1" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Skeleton className="h-8 w-8 mx-auto mb-1" />
                <Skeleton className="h-3 w-16 mx-auto" />
              </div>
              <div className="p-3 bg-accent/10 rounded-lg">
                <Skeleton className="h-8 w-8 mx-auto mb-1" />
                <Skeleton className="h-3 w-16 mx-auto" />
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
    
    <div className="lg:col-span-2 space-y-8">
      {[1, 2].map((i) => (
        <Card key={i} className="glass-card border-border/50">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                  <Skeleton className="w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-4 w-full mb-1" />
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-8" />
                      <Skeleton className="h-3 w-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const TimelineSkeleton = () => (
  <div className="space-y-8">
    <div className="flex flex-wrap justify-center gap-2">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Skeleton key={i} className="h-10 w-32" />
      ))}
    </div>
    
    <Card className="glass-card border-border/50">
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <Skeleton className="h-6 w-32 mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Skeleton className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-6 w-20" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted/20 rounded-lg">
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);