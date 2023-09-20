export type Post = {
    slug: {
      current: string;
      _type: string;
    };
    _updatedAt: string;
    _type: string;
    mainImageUrl: string;
    publishedAt: string;
    _createdAt: string;
    _rev: string;
    _id: string;
    body: Block[];
    categoryList: null;
    mainImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    author: {
      _type: string;
      _ref: string;
    };
    authorName: string;
    categories: {
      _type: string;
      _key: string;
    }[];
    title: string;
  };
  
  export type Block = {
    style: string;
    _key: string;
    markDefs: MarkDef[];
    children: BlockChild[];
    _type: string;
  };
  
  type MarkDef = {};
  
  export type BlockChild = {
    marks: Mark[];
    text: string;
    _key: string;
    _type: string;
  };
  
  type Mark = {};