export type TreeNode = {
  title: string;      // Titlul afișat în UI
  slug: string;       // Segmenți de URL (fără diacritice, cu cratime)
  children?: TreeNode[];
  tag?: string;       // Opțional: etichetă scurtă (A, B, C, etc.)
};
