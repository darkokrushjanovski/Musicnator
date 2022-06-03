import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Sound from "../../assets/sound.mp3";
import { Card } from "react-bootstrap";

function UserAudios({ audio }) {
  return (
    <Card border="primary" className="mb-2 mx-2  border border-2">
      <Card.Text className="text-center fs-5 fw-bold">{audio.title}</Card.Text>
      <ReactAudioPlayer src={Sound} controls className="audioPlayer mb-3" />
    </Card>
  );
}

export default UserAudios;
