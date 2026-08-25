"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { createBlog } from "@/lib/actions/blog.actions";
import { usePathname, useRouter } from "next/navigation";

type BlockType = "heading" | "paragraph" | "image";

interface Block {
  type: BlockType;
  value?: string;
  style?: string;
  src?: string;
}

const Page: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const path = usePathname();
  const router = useRouter();

  const addBlock = (type: BlockType) => {
    setBlocks([...blocks, { type }]);
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

  const handleSubmit = async () => {
    //  await createBlog({blocks,path})

    console.log(blocks);
    router.back()
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
        <button
          onClick={() => addBlock("image")}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Add Image
        </button>
      </div>
      {blocks.map((block, index) => (
        <div key={index}  className="relative mb-4">
          <button
            onClick={() => deleteBlock(index)}
            className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 px-1.5 rounded-full text-white hover:bg-red-600"
          >
            &times;
          </button>
          {block.type === "heading" && (
            <div key={index} className="mb-4">
              <input
                placeholder="Enter heading"
                value={block.value || ""}
                onChange={(e) => updateBlock(index, { value: e.target.value })}
                className="w-full p-2 rounded-md border shadow-sm"
              />
              <select
                value={block.style || ""}
                onChange={(e) => updateBlock(index, { style: e.target.value })}
                className="w-full p-2 rounded-md border shadow-sm"
              >
                <option value="heading">Heading</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
          )}
          {block.type === "paragraph" && (
            <div key={index} className="mb-4">
              <textarea
                placeholder="Enter paragraph"
                value={block.value || ""}
                onChange={(e) => updateBlock(index, { value: e.target.value })}
                className="w-full p-2 rounded-md border shadow-sm h-32"
              ></textarea>
              <select
                value={block.style || ""}
                onChange={(e) => updateBlock(index, { style: e.target.value })}
                className="mt-2 p-2 w-full border rounded-md shadow-sm"
              >
                <option value="bold">Bold</option>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
              </select>
            </div>
          )}
          {block.type === "image" && (
            <div key={index} className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      updateBlock(index, { src: reader.result as string });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full p-2 rounded-md border shadow-sm"
              />
              {block.src && (
                <Image src={block.src} alt="Preview" width={100} height={100} />
              )}
            </div>
          )}
        </div>
      ))}
      {blocks.length > 0 && (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Page;
