import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export const Recipe = (props) => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
    return () => {
    };
  }, []);

  return (<div>recipe page</div>);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Recipe);
