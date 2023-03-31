import React, { useState } from 'react';
/// import styles from './ListGroup.module.css'
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'red' : 'none')}
`

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    const handleClick = (event: MouseEvent) => console.log(event);
    const [selectedIndex, setSelectedIndex] = useState(0);


    return (
        <>
            <h1>List</h1>
            <List className="list-group">
                {items.map((item: any, index: any) => 
                <ListItem 
                active={index === selectedIndex}
                key={item} 
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
                >{item}</ListItem>)}
            </List>
        </>
    )
}

export default ListGroup;