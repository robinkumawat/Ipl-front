import {React ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './search.css'

function Search() {

    const [search, setSearch] = useState("")
    const [finaldata, setFinalData] = useState([])
    const api = "AIzaSyCjomm7aE_JqyO4nsFDWs8QTRfFPscSfFI"
    const cx = "f5d309ab72fb0431a"

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${search}`
            );

            const data = await response.json();
            console.log(data.items)
            setFinalData(data.items)
            setSearch("")
        } catch (error) {
            console.error("Error", error)
        }

    };
    console.log(finaldata)


    return (
        <div className='search-bar' >
            <input type="text" placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={handleSearch}>Search</Button>
            <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                {
                    (finaldata.length !== 0) ? finaldata.map((value, index) => {

                        return <div className='box' style={{ width: "300px", height: "auto",padding:"15px", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "gray", borderRadius: "5px", boxShadow: "1px 1px 15px rgba(0,0,0)", margin: "20px", color: "white" ,   border: "1px solid black",
                        radius: "20px",shadow: "5px 5px 10px black" }}>
                            {/* <img src={value.src} alt={value.src} /> */}
                            <h2>{value.title}</h2>
                            {/* <p>{value.kind}</p> */}
                            <button className='link'><a href={value.link}> Please click me</a></button>
                        </div>

                    }) : ""
                }
            </div>

        </div>
    )
}

export default Search