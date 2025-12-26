export default function SearchBar({value, onChange}){
    return(
        <input 
        type="text" 
        placeholder="Search products..." 
        value={value} 
        onChange={onChange} 
        style={{marginBottom: "10px", padding: "5px", width: "300px" }}/>

    );
}