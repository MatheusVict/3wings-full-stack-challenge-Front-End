import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface SearchInputProps {
  onSearch: (search: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Pesquisar por um post"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleSearch}
        value={search}
      />
      <Button variant="outline-secondary" id="button-addon2">
        Pesquisar
      </Button>
    </InputGroup>
  );
}
