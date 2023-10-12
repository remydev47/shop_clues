"use client"
import Image from "next/image"

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form 
     className={styles.form}
     onSubmit={handleSubmit}
    >
      <input 
        type="text"
        placeholder="Enter the Product Link"
        className="searchbar-input"
      />
      <button
       type="submit"
       className="searchbar-btn"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar;

const styles = {
  form:`flex flex-wrap gap-4 mt-12`,
}