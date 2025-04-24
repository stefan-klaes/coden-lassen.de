"use client";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "@/components/ui/custom-link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SearchIcon, X } from "lucide-react";
import { Project } from "@/config/projects/projects";
import PaperImage from "@/components/blocks/paper-image";

interface ProjectsListProps {
  projects: readonly Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects based on search query and selected tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by selected tags
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) =>
          (project.tags as unknown as string[]).includes(tag)
        );

      return matchesSearch && matchesTags;
    });
  }, [projects, searchQuery, selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative w-full">
              <SearchIcon className="absolute left-2 top-2.5 size-4" />
              <Input
                placeholder="Projekte durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchQuery("");
                  }
                }}
              />
            </div>
          </div>
          {(searchQuery || selectedTags.length > 0) && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center gap-2"
            >
              <X size={16} />
              Filter zurücksetzen
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-8">
          <Typography variant="h3">Keine Projekte gefunden</Typography>
          <p className="text-muted-foreground mt-2">
            Bitte versuche es mit anderen Suchbegriffen oder Filtern.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, i) => (
            <Link
              key={i}
              href={`/referenzen/${project.slug}`}
              className="block"
            >
              <div className="hover:bg-accent transition delay-75 w-full h-full overflow-hidden rounded-lg">
                {/* Papier-Zettel mit Tape-Effekt */}
                <PaperImage src={project.image} alt={project.name} />
                <div className="flex-1 space-y-4 p-2 md:p-4">
                  <div>
                    <Typography
                      variant="h2"
                      className="text-2xl lg:text-2xl line-clamp-1"
                    >
                      {project.name}
                    </Typography>
                    <p className="mt-2 text-muted-foreground line-clamp-4">
                      {project.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
