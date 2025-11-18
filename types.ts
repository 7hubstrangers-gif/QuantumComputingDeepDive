export interface Section {
  id: string;
  title: string;
  prompt: string;
}

export interface ContentSegment {
  type: 'text' | 'code' | 'diagram';
  content: string;
}
