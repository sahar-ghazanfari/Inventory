type NewCategoryProps = {
  handleOpenCategory: () => void;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  handleAddCategory: (e: React.FormEvent) => void;
};

function NewCategory({
  handleOpenCategory,
  categories,
  setCategories,
  newCategory,
  setNewCategory,
  handleAddCategory,
}: NewCategoryProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold my-4 text-titleH2">Add new Category</h2>
      <form
        onSubmit={handleAddCategory}
        className="p-4 flex flex-col bg-backgroundTitle rounded-lg gap-4"
      >
        <label htmlFor="category-title" className="label">
          Title
        </label>
        <input
          className="inputs"
          type="text"
          id="category-title"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="inputs"
        ></textarea>
        <div className="flex justify-between gap-6">
          <button
            type="button"
            className="border text-border border-border w-1/2 rounded-lg font-semibold py-2"
            onClick={handleOpenCategory}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-btn text-textColor w-1/2 rounded-lg font-semibold py-2"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCategory;
