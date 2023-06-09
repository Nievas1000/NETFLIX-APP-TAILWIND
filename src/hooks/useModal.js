import { useRef, useState, useEffect } from "react";

export const useModal = () => {
  const [showDropdow, setShowDropdown] = useState(false);
  const divRefSon = useRef(null);
  const divRefFather = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (divRefFather.current) {
        if (
          divRefSon.current &&
          !divRefSon.current.contains(event.target) &&
          !divRefFather.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      } else {
        if (divRefSon.current && !divRefSon.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return [showDropdow, setShowDropdown, divRefSon, divRefFather];
};
