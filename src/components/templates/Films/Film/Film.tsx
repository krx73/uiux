import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";
// import {brm "./film.css"

const Film: React.FC<MovieList> = (props) => {
  return (
      <div style={{height: "100%", marginTop:20}}>
          {console.log(props)}
          <Link href={`/films/${props.id}`}>

        <div  style={{display: 'flex'}}>
          <div  className="cl1" style={{marginRight: 30}}>
              {/*href={`/films/${props.id}`}*/}
            <Style.Card1
                style={{marginRight: 10, border: "3px solid grey", borderRadius: '3%', minWidth: '200px', maxWidth: '200px' }}
                src={
                  props.medium_cover_image
                      ? props.medium_cover_image
                      : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
                }
                alt="                                                 "
            ></Style.Card1>
          </div>
          <div className="cl2" style={{marginTop: 0}}>
              <div style={{display: 'flex'}}>
                  <h1 style={{marginRight: 100}}>{props.title_long}</h1>
                  <h1>{props.rating} / 10</h1>
              </div>
              <div style={{display: 'flex'}}>
                  {0 in props.genres ? (<h3 style={{marginRight: 20, border: "3px solid black", borderRadius: '25%', padding: 5}}>{props.genres[0].toUpperCase()}</h3>) : ("")}
                  {1 in props.genres ? (<h3 style={{marginRight: 20, border: "3px solid black", borderRadius: '25%', padding: 5}}>{props.genres[1].toUpperCase()}</h3>) : ("")}
                  {2 in props.genres ? (<h3 style={{marginRight: 20, border: "3px solid black", borderRadius: '25%', padding: 5}}>{props.genres[2].toUpperCase()}</h3>) : ("")}
                  {3 in props.genres ? (<h3 style={{marginRight: 20, border: "3px solid black", borderRadius: '25%', padding: 5}}>{props.genres[3].toUpperCase()}</h3>) : ("")}
              </div>
              <h2>Year: {props.year}</h2>
              <h2>Language: {props.language}</h2>
              {props.torrents[0] ? <button style={{backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "15px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                  cursor: "pointer",
                  borderRadius: "8px"}} onClick={() => window.open(props.torrents[0].url, '_blank')}
              >{props.torrents[0].quality} {props.torrents[0].size}</button> : " "}
              {props.torrents[1] ? <button style={{backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                  cursor: "pointer",
                  borderRadius: "8px"}} onClick={() => window.open(props.torrents[1].url, '_blank')}
              >{props.torrents[1].quality} {props.torrents[1].size}</button> : " "}
              {props.torrents[2] ? <button style={{backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                  cursor: "pointer",
                  borderRadius: "8px"}} onClick={() => window.open(props.torrents[2].url, '_blank')}
              >{props.torrents[2].quality} {props.torrents[2].size}</button> : " "}

          </div>
        </div>
    </Link>
      </div>


      // <Style.Film style={{ display: 'flex', alignItems: 'center' }}>
      //   <Style.Card1
      //       src={
      //         props.medium_cover_image
      //             ? props.medium_cover_image
      //             : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
      //       }
      //       alt={props.medium_cover_image}
      //   ></Style.Card1>
      //   <div style={{flexShrink: 1 }}>
      //     <h1>fasf</h1>
      //   </div>
      // {/*</Style.Film>*/}



  // {/*<div>*/}
  //     {/*<Link href={`/films/${props.id}`}>*/}
  //     {/*  <Style.Content>*/}
  //     {/*    <Style.Cards>*/}
  //     {/*      <Style.Card1*/}
  //     {/*        src={*/}
  //     {/*          props.medium_cover_image*/}
  //     {/*            ? props.medium_cover_image*/}
  //     {/*            : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"*/}
  //     {/*        }*/}
  //     {/*        alt={props.medium_cover_image}*/}
  //     {/*      ></Style.Card1>*/}
  //
  //     {/*      <Style.Card2>*/}
  //     {/*        <Style.Rating>*/}
  //     {/*          <Style.RatingIcon>*/}
  //     {/*            <VscStarFull />*/}
  //     {/*          </Style.RatingIcon>*/}
  //     {/*          <Style.RatingText> {props.rating} / 10</Style.RatingText>*/}
  //     {/*        </Style.Rating>*/}
  //
  //     {/*        {props.genres ? (*/}
  //     {/*          <Style.Genres>*/}
  //     {/*            {0 in props.genres ? (*/}
  //     {/*              <Style.GenresText>*/}
  //     {/*                {props.genres[0].toUpperCase()}*/}
  //     {/*              </Style.GenresText>*/}
  //     {/*            ) : (*/}
  //     {/*              ""*/}
  //     {/*            )}*/}
  //     {/*            {1 in props.genres ? (*/}
  //     {/*              <Style.GenresText>*/}
  //     {/*                {props.genres[1].toUpperCase()}*/}
  //     {/*              </Style.GenresText>*/}
  //     {/*            ) : (*/}
  //     {/*              ""*/}
  //     {/*            )}*/}
  //     {/*            {2 in props.genres ? (*/}
  //     {/*              <Style.GenresText>*/}
  //     {/*                {props.genres[2].toUpperCase()}*/}
  //     {/*              </Style.GenresText>*/}
  //     {/*            ) : (*/}
  //     {/*              ""*/}
  //     {/*            )}*/}
  //     {/*          </Style.Genres>*/}
  //     {/*        ) : (*/}
  //     {/*          ""*/}
  //     {/*        )}*/}
  //
  //     {/*        <Style.Details>DETAILS</Style.Details>*/}
  //     {/*      </Style.Card2>*/}
  //     {/*    </Style.Cards>*/}
  //
  //     {/*    <Style.Name>{props.title}</Style.Name>*/}
  //
  //     {/*    <Style.Text>*/}
  //     {/*      {props.year} {props.language}*/}
  //     {/*    </Style.Text>*/}
  //     {/*  </Style.Content>*/}
  //     {/*</Link>*/}
  //     {/*</div>*/}
  //   {/*</Style.Film>*/}
  );
};

export default Film;
