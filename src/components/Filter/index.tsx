import { useState } from "react";
import { MapPin } from "phosphor-react";

import { FilterContainer, LocationButton } from "./styles";
import { Title } from "../Title";

const IPINFOTOKEN = "fab6b2e015faec";

export function Filter() {
  const [userCity, setUserCity] = useState("");

  async function handleLocateUser() {
    if (userCity !== "") return;

    fetch(`https://ipinfo.io/json?token=${IPINFOTOKEN}`)
      .then((res) => res.json())
      .then((jsonres) => setUserCity(`${jsonres.city}, ${jsonres.region}`));
  }

  return (
    <FilterContainer>
      <Title title="Cidade:" />
      <LocationButton onClick={handleLocateUser} isCityEmpty={userCity === ""}>
        <MapPin size={24} />
        {userCity !== "" ? userCity : "Usar minha Localização"}
      </LocationButton>
    </FilterContainer>
  );
}
