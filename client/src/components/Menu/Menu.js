// import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
// import Container from "../Wrapper";

// function Menu() {
//     const [food, setFood] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await API.getMenu();
//             setFood(result.data.Menu);
//         };

//         fetchData();
//     }, []);

//     return (
//         <Container>
//             <h6>Menu Component</h6>
//         </Container>
//     )
// }

// export default Menu;
