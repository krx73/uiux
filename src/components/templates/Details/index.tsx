import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentItem from "./CommentItem/CommentItem";
import {CommentProps} from "./CommentItem/CommentItem";
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';



import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
const Details = () => {

  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }

  const[comments, setComments] = useState<CommentProps[]> (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
  });

  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, pageKey]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     const savedComments = localStorage.getItem('comments');
  //     if (savedComments) {
  //       setComments(JSON.parse(savedComments));
  //     }
  //   }
  // }, []);

  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
      (router.query.id as string) || ""
  );

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
        <Torrent
            key={index}
            href={item.url}
            quality={item.quality}
            type={item.type}
            size={item.size}
        />
    );
  });



  function commentsList(){
    // Функция для добавления нового комментария
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const newComment: CommentProps = {
        id: comments.length + 1,
        userName: "User " + userName,
        commentText: "Wrote: " + commentText
      };
      setComments([...comments, newComment]);
      setUserName('');
      setCommentText('');


    }

    //Функция для удаления комментария

    // Обработчик изменения поля ввода имени пользователя
    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    // Обработчик изменения поля ввода текста комментария
    function handleCommentTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCommentText(event.target.value);
    }



    // Создаем массив элементов React, каждый из которых представляет отдельный комментарий
    const commentItems = comments.map((comment) => (

        <CommentItem
            key = {comment.id}
            id = {comment.id}
            userName = {comment.userName}
            commentText = {comment.commentText}
            comments={comments}
            setComments={setComments}
        />
    ));


    return (
        <div>
          {/* Форма для добавления нового комментария */}
          <form onSubmit={addComment} className="h1">
            <Style.YourNameLabel>Your Name:</Style.YourNameLabel>
            <input className="h1" type="text" value={userName} onChange={handleUserNameChange} />
            <Style.CommentTextLabel>Your Comment:</Style.CommentTextLabel>
            <textarea className="h1" value={commentText} onChange={(e) => handleCommentTextChange(e)}/>
            <div></div>
            <Button className="rounded-square" variant="primary" type="submit">Add comment</Button>
            <h1></h1>
          </form>

          {/* Список комментариев */}
          {commentItems}
        </div>
    );
  }

  return (
      <div className="idpage">
        {/*<img src={post.background_image}/>*/}
        {filmRetrieve?.data.movie.id ? (
            // <div>
            // <div style={{ backgroundImage: `url(${post.background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 430}}>
            // </div>
            //     <img src={post.background_image} alt="Your Image" style={{ display: 'none' }} />

            <div style={{height: '100vh',
              margin: '0% 10%',
              padding: '3% 0',
              display: 'flex',
              flexDirection: 'column'}}>
              {/*<img src={post.background_image} alt="Your Image" style={{ display: 'none' }} />*/}
              <div style={{display: 'flex'}}>
                <img style={{width: '400px', height: '600px', border: "3px solid black", borderRadius: "5%"}} src={filmRetrieve?.data.movie.medium_cover_image} alt={filmRetrieve?.data.movie.background_image_original.title_long} />
                <div style={{    margin: '4% 2%',
                  flexGrow: '1'}}>

                  <h1>{filmRetrieve?.data.movie.title_long}</h1>
                  <h1>Rating: {filmRetrieve?.data.movie.rating}/10</h1>
                  <div>
                    {/*<h2>{post.genres[0]}    {post.genres[1]}    {post.genres[2]}    {post.genres[3]}</h2>*/}
                    {filmRetrieve?.data.movie.genres[0] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}}>{filmRetrieve?.data.movie.genres[0]}</button> : " "}
                    {filmRetrieve?.data.movie.genres[1] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}}>{filmRetrieve?.data.movie.genres[1]}</button> : " "}
                    {filmRetrieve?.data.movie.genres[2] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}}>{filmRetrieve?.data.movie.genres[2]}</button> : " "}
                    {filmRetrieve?.data.movie.genres[3] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}}>{filmRetrieve?.data.movie.genres[3]}</button> : " "}
                  </div>
                  <h3>Продолжительность фильма: {Math.floor(filmRetrieve?.data.movie.runtime/60)}ч. {Math.floor(filmRetrieve?.data.movie.runtime % 60)}мин.</h3>
                  <div>
                    {filmRetrieve?.data.movie.torrents[0] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}} onClick={() => window.open(filmRetrieve?.data.movie.torrents[0].url, '_blank')}>{filmRetrieve?.data.movie.torrents[0].quality}  {filmRetrieve?.data.movie.torrents[0].size}</button> : " "}
                    {filmRetrieve?.data.movie.torrents[1] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}} onClick={() => window.open(filmRetrieve?.data.movie.torrents[1].url, '_blank')}>{filmRetrieve?.data.movie.torrents[1].quality}  {filmRetrieve?.data.movie.torrents[1].size}</button> : " "}
                    {filmRetrieve?.data.movie.torrents[2] ? <button style={{    marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      borderRadius: "50%",
                      border: '2px solid black'}} onClick={() => window.open(filmRetrieve?.data.movie.torrents[2].url, '_blank')}>{filmRetrieve?.data.movie.torrents[2].quality}  {filmRetrieve?.data.movie.torrents[2].size}</button> : " "}

                    {console.log(filmRetrieve?.data.movie.torrents[0].url)}
                  </div>
                  <h1>{filmRetrieve?.data.movie.ge}</h1>
                </div>
              </div>
              {/*{console.log(post.description)}*/}
              {/*{console.log(post.description_full)}*/}
              <h1> {filmRetrieve?.data.movie.description || filmRetrieve?.data.movie.description_full ? "Описание:" : ""}</h1>
              <h2>{filmRetrieve?.data.movie.description_full ? filmRetrieve?.data.movie.description_full : filmRetrieve?.data.movie.description}</h2>

              {/*<h1 style={{marginTop: 30}}>Добавить комментарий</h1>*/}
              <h1 style={{marginTop: 5}}>Добавить комментарий</h1>
              {/*<h1>Добавить комментарий</h1>*/}
              {/*<Comments postId={filmRetrieve?.data.movie.id} />*/}
              <Style.CommentsTitle>Write a comment!</Style.CommentsTitle>
              <Style.CommentItem className="h1">{commentsList()}</Style.CommentItem>
            </div>

            // </div>
        ) : (
            <Loader />
        )}
      </div>
      // <div>
      //   {filmRetrieve?.data.movie.background_image_original ?
      //       // {console.log(filmRetrieve?.data.movie.background_image_original)}
      //       // console.log(filmRetrieve?.data.movie.background_image_original)
      //       <div style={{backgroundImage: `url(${filmRetrieve?.data.movie.background_image_original})`,
      //         backgroundSize: 'cover', /* Растягивает изображение на весь размер контейнера */
      //         backgroundPosition: 'center', /* Центрирует изображение по центру контейнера */
      //         height: '90vh'}}>
      //         <div style={{display: 'flex'}}>
      //           <div>
      //             <img
      //           </div>
      //           <div>
      //
      //           </div>
      //         </div>
      //       </div>
      //
      //       : " "}


      // {/*{filmRetrieve?.data.movie.background_image_original ?*/}
      // {/*<Style.Details>*/}
      // {/*  <Style.BackgroundImage*/}
      // {/*      src={filmRetrieve?.data.movie.background_image_original}*/}
      // {/*  ></Style.BackgroundImage>*/}
      // {/*  <Style.Content>*/}
      // {/*    <Style.ContentTitle>*/}
      // {/*      <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>*/}
      // {/*    </Style.ContentTitle>*/}
      //
      // {/*    <Style.Data>*/}
      // {/*      <Style.Image>*/}
      // {/*        <Style.Img*/}
      // {/*            src={filmRetrieve?.data.movie.large_cover_image}*/}
      // {/*        ></Style.Img>*/}
      // {/*        <Style.Buttons>*/}
      // {/*          <Style.DownloadButton href={filmRetrieve?.data.movie.url}>*/}
      // {/*            Download*/}
      // {/*          </Style.DownloadButton>*/}
      // {/*          <Style.WatchButton href={filmRetrieve?.data.movie.url}>*/}
      // {/*            Watch Now*/}
      // {/*          </Style.WatchButton>*/}
      // {/*        </Style.Buttons>*/}
      // {/*      </Style.Image>*/}
      //
      // {/*      <Style.Description>*/}
      // {/*        <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>*/}
      //
      // {/*        <Style.Year>*/}
      // {/*          {filmRetrieve?.data.movie.year +*/}
      // {/*              " " +*/}
      // {/*              filmRetrieve?.data.movie.language}*/}
      // {/*        </Style.Year>*/}
      //
      // {/*        <Style.Genres>{genresList}</Style.Genres>*/}
      //
      // {/*        <Style.DescriptionFull>*/}
      // {/*          {filmRetrieve?.data.movie.description_full}*/}
      // {/*        </Style.DescriptionFull>*/}
      //
      // {/*        <Style.Statistic>*/}
      // {/*          <StatisticItem*/}
      // {/*              icon={<VscStarFull />}*/}
      // {/*              text={filmRetrieve?.data.movie.rating}*/}
      // {/*          ></StatisticItem>*/}
      // {/*          <StatisticItem*/}
      // {/*              icon={<AiTwotoneLike />}*/}
      // {/*              text={filmRetrieve?.data.movie.like_count}*/}
      // {/*          ></StatisticItem>*/}
      // {/*          <StatisticItem*/}
      // {/*              icon={<BiTimeFive />}*/}
      // {/*              text={filmRetrieve?.data.movie.runtime}*/}
      // {/*          ></StatisticItem>*/}
      // {/*          <StatisticItem*/}
      // {/*              icon={<VscDesktopDownload />}*/}
      // {/*              text={filmRetrieve?.data.movie.download_count}*/}
      // {/*          ></StatisticItem>*/}
      // {/*        </Style.Statistic>*/}
      //
      // {/*        <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>*/}
      //
      // {/*        <Style.Torrents>{torrentsList}</Style.Torrents>*/}
      //
      // {/*        <Style.CommentsTitle>Write a comment!</Style.CommentsTitle>*/}
      //
      // {/*        <Style.CommentItem>{commentsList()}</Style.CommentItem>*/}
      //
      // {/*      </Style.Description>*/}
      // {/*    </Style.Data>*/}
      // {/*  </Style.Content>*/}
      // {/*</Style.Details>*/}
      // {/*      : " "}*/}
      // {/*</div>*/}
  );
};

export default Details;



