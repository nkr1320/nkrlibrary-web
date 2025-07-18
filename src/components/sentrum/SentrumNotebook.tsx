import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  Tag,
  Calendar,
  Trash2,
  Download,
  BookOpen,
} from "lucide-react";
import { useSentrum } from "@/contexts/SentrumContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const SentrumNotebook: React.FC = () => {
  const { state, addNote, getSummary } = useSentrum();
  const [newNote, setNewNote] = useState("");
  const [newTags, setNewTags] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAddNote, setShowAddNote] = useState(false);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const tags = newTags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
      addNote(newNote.trim(), tags);
      setNewNote("");
      setNewTags("");
      setShowAddNote(false);
    }
  };

  const filteredNotes = state.learningNotes.filter((note) => {
    const matchesSearch =
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesTag = !selectedTag || note.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(
    new Set(state.learningNotes.flatMap((note) => note.tags)),
  );

  const exportNotes = () => {
    const notesText = state.learningNotes
      .map((note) => {
        return `${note.timestamp.toLocaleDateString()} - ${note.content}\nTags: ${note.tags.join(", ")}\n\n`;
      })
      .join("");

    const blob = new Blob([notesText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "learning-notes.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateLearningReport = () => {
    const summary = getSummary();
    const notesByTag = allTags.map((tag) => ({
      tag,
      notes: state.learningNotes.filter((note) => note.tags.includes(tag)),
    }));

    const report = `# Learning Report\n\n${summary}\n\n## Notes by Topic\n\n${notesByTag
      .map(
        ({ tag, notes }) =>
          `### ${tag}\n${notes.map((note) => `- ${note.content}`).join("\n")}\n`,
      )
      .join("\n")}`;

    const blob = new Blob([report], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "learning-report.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Learning Notebook
          </h3>
          <div className="flex items-center gap-2">
            <Button
              onClick={generateLearningReport}
              variant="outline"
              size="sm"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button onClick={() => setShowAddNote(true)} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes..."
            className="pl-10"
          />
        </div>

        {/* Tags filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            <Button
              onClick={() => setSelectedTag(null)}
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
              >
                {tag}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Notes List */}
      <ScrollArea className="flex-1 p-4">
        <AnimatePresence>
          {/* Add Note Form */}
          {showAddNote && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-4 border border-border rounded-lg bg-muted/30"
            >
              <div className="space-y-3">
                <Textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="What did you learn today?"
                  rows={3}
                />
                <Input
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Tags (comma-separated): react, javascript, tutorial"
                />
                <div className="flex gap-2">
                  <Button onClick={handleAddNote} size="sm">
                    Add Note
                  </Button>
                  <Button
                    onClick={() => setShowAddNote(false)}
                    variant="outline"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Empty State */}
          {state.learningNotes.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Start Your Learning Journey
              </h4>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                Take notes as you explore NKR Library content. Track your
                progress and build your knowledge base.
              </p>
              <Button onClick={() => setShowAddNote(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Note
              </Button>
            </motion.div>
          )}

          {/* Notes */}
          <div className="space-y-3">
            {/* Each note uses note.id as a unique, stable key */}
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 border border-border rounded-lg bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {note.timestamp.toLocaleDateString()} at{" "}
                    {note.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-foreground mb-3 leading-relaxed">
                  {note.content}
                </p>

                {note.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {/* Each tag uses tag value as key, which is safe for static, unique tags */}
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* No results */}
          {filteredNotes.length === 0 && state.learningNotes.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                No notes found matching your search criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollArea>

      {/* Footer */}
      {state.learningNotes.length > 0 && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{state.learningNotes.length} notes total</span>
            <Button onClick={exportNotes} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Notes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SentrumNotebook;
