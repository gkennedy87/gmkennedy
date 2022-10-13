const TechStack = ({techStack}:any) => {
    
    const styles = {
        list: {
            listStyle:'none',
            display:"flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
        },
        listItem: {
            textDecoration:"none",
            color: "#00000075"
        }
    }
    return (
        <ul style={styles.list}>
            {
                techStack.map((item:string) => {
                    return(
                    <li key={techStack.indexOf(item)} style={styles.listItem}>
                        {item}
                    </li>)
                })
            }
        </ul>
       
    )
}

export default TechStack;