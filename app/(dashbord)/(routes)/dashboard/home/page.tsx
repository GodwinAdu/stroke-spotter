"use client";

import { useState, ChangeEvent } from "react";

type BlockType = "heading" | "paragraph";

interface Block {
  type: BlockType;
  value: string;
  level?: number; // Optional, because only relevant for headings
  style?: "normal" | "bold" | "italic"; // Optional, because only relevant for paragraphs
}

const Page: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: BlockType) => {
    const defaultAttributes: { [key in BlockType]?: Partial<Block> } = {
      heading: { level: 1 },
      paragraph: { style: "normal" },
    };

    const newBlock: Block = { type, value: "", ...defaultAttributes[type] };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (index: number, changes: Partial<Block>) => {
    const updatedBlocks = [...blocks];
    Object.assign(updatedBlocks[index], changes);
    setBlocks(updatedBlocks);
  };
  const deleteBlock = (index: number) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1);
    setBlocks(updatedBlocks);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex space-x-4 mb-6 justify-center items-center">
        <button
          onClick={() => addBlock("heading")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Heading
        </button>
        <button
          onClick={() => addBlock("paragraph")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add Paragraph
        </button>
      </div>
      {blocks.map((block, index) => {
        return (
          <div key={index} className="relative mb-4">
            {/* Common close button for all block types */}
            <button onClick={() => deleteBlock(index)} className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 px-1.5 rounded-full text-white hover:bg-red-600">
              &times;
            </button>
            {blocks.length === 0 && (
                <div className="flex flex-col items-center justify-center h-60 space-y-4">
                <img src="/path-to-a-nice-image.png" alt="Placeholder" className="w-32 h-32 object-cover rounded-full" />
                <h2 className="text-2xl text-gray-700 font-semibold">No Blocks Yet!</h2>
                <p className="text-gray-500">Click on "Add Heading" or "Add Paragraph" to start adding content.</p>
            </div>
            
            )}

            {block.type === 'heading' && (
              // ... heading code ...
              <div key={index} className="mb-4">
                
                <input
                  placeholder="Enter heading"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateBlock(index, { value: e.target.value })
                  }
                  className="w-full p-2 rounded-md border shadow-sm"
                />
                <select
                  value={block.level}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    updateBlock(index, { level: parseInt(e.target.value) })
                  }
                  className="mt-2 p-2 w-full border rounded-md shadow-sm"
                >
                  <option value="1">Heading</option>
                  <option value="2">Large</option>
                  <option value="3">Medium</option>
                  <option value="3">Small</option>
                  {/* ... Other heading levels */}
                </select>
              </div>

            )}
            {block.type === 'paragraph' && (
              // ... paragraph code ...
              <div key={index} className="mb-4">
                <textarea
                  placeholder="Enter paragraph"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    updateBlock(index, { value: e.target.value })
                  }
                  className="w-full p-2 rounded-md border shadow-sm h-32"
                ></textarea>
                <div className="mt-2 space-x-2">
                  {/* Style options for the paragraph (simplified example) */}
                  <select
                  value={block.level}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    updateBlock(index, { level: parseInt(e.target.value) })
                  }
                  className="mt-2 p-2 w-full border rounded-md shadow-sm"
                >
                  <option value="1">Bold</option>
                  <option value="2">Normal</option>
                  <option value="3">small</option>
                  {/* ... Other heading levels */}
                </select>
                </div>
              </div>
            )}
          </div>
        );
      })}

      
     {blocks.length > 0 && (
         <button
         onClick={() => {
           /* save logic here */
         }}
         className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
       >
         Submit
       </button>
     )}
    </div>
  );
};

export default Page;
