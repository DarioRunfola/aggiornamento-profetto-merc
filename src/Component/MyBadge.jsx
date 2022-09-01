import Badge from 'react-bootstrap/Badge';


const MyBadg = (prop) => (

    <>
        <div>
            <h1>
               {prop.text}<Badge variant={prop.badg}>ciao</Badge>
            </h1>
        </div>

    </>
)


export default MyBadg