import {
  BookOpen,
  Search,
  Globe,
  ClipboardCheck,
  FileText,
  FilePlus,
  FilePen,
  Zap,
} from "../icons";

export const toolIcons: Record<string, typeof Search> = {
  search_notes: Search,
  web_search: Globe,
  copy_to_clipboard: ClipboardCheck,

  get_note: FileText,
  create_note: FilePlus,
  update_note: FilePen,
  get_snippet: Zap,
  update_snippets: Zap,
  update_dictionary: BookOpen,
};
