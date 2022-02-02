import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Tabs = ({ categories }) => {
  const classes = useStyles();
  
  return (
      
    <>
      <ul className={classes.root}>
        {categories.map(category => {
          
          return (
            <>
              <li  key={category.id}>
                <Link className={classes.tab} to={`/${category.slug}`}>{category.name}</Link>
              </li>
            </>
              
            );
        })}
      </ul>
    </>
  );
};

export default Tabs;
