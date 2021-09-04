import React from "react";
import styled,  { keyframes } from 'styled-components';

const userDetail = (props) => {
return (
	<Box>
	<h1 
    style={{ color: "#f50057",
		    textAlign: "center",
			marginTop: "-50px",
          }}>
		Personal Infromation
	</h1>
	<Containers>
		<Row>
		<Column></Column>
		<Column>
			<Heading>Medium</Heading>
            {
                props.data.map((item)=>
                    <FooterLink href="#">
                    <Attribute>
						<div style={{fontWeight:"600",color:"#66c2ff"}}> {item.attribute} </div>
				    </Attribute>
                    </FooterLink>
                )
            }
		
		</Column>
		<Column>
			<Heading>Details</Heading>
            {
                props.data.map((item)=>
                    <FooterLink href="#" >
                    <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px", fontWeight:"bold" }}>
                        {item.value}
                        </span>
                    </i>
                    </FooterLink>
                )
            }
		</Column>
        
		</Row>
	</Containers>
    </Box>
   );
};
export default userDetail;

const Attribute = styled.div`
        text-align: center,
		justify-content:center,
		width:100%,
		font-weight:400,
		margin-top:1%,
		display:flex,
        flex-direction: row
`;

const Box = styled.div`
    padding: 80px 60px;
    bottom: 0;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

const Containers = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
    margin-top: -8%;
	/*margin: 0 auto;*/
	/* background: red; */
	@media (max-width:768px){
		display : none;
	}
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(185px, 1fr));
    grid-gap: 10px;
`;

const FooterLink = styled.a`
    color : black;
    margin-bottom: 20px;
    font-size: 15px;
    text-decoration: none;
    font-family:"Comic Sans MS"
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
    font-family:"Comic Sans MS"
`;