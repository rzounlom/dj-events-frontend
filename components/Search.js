import router, { useRouter } from "next/router";

import styles from "@/styles/Search.module.css";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          placeholder="Search Events..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
