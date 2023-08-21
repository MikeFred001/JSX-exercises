"use strict";

function Tweet({ tweets }) {

  const styles = {
    backgroundColor: "blue",
    color: "white",
    fontFamily: "Arial",
    padding: "10px"
  }

  return (
    tweets.map(t =>
      <div style={ styles }>
      <h3>{ t.username }</h3>
      <h4>{ t.name }</h4>
      <p>{ t.date }</p>
      <p>{ t.message }</p>
    </div>
    )
  );
}