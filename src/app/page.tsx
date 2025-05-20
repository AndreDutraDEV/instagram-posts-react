"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

// import Image from "next/image";
function ExtendsActionButton() {
  return (
    <button
      type="button"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Mais opções"
      title="Mais opções"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2" fill="#333" />
        <circle cx="12" cy="12" r="2" fill="#333" />
        <circle cx="12" cy="19" r="2" fill="#333" />
      </svg>
      {/* <span style={{ marginLeft: "8px", fontSize: "14px", color: "#333" }}>Detalhes</span> */}
    </button>
  );
}

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        background: isFollowing ? "#e0e0e0" : "#1976d2",
        color: isFollowing ? "#333" : "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
      aria-pressed={isFollowing}
    >
      {isFollowing ? "Seguindo" : "Seguir"}
    </button>
  );
}

function ButtonsActionPost() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      {/* Grupo ActionWithPost */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <LikePostButton />
        <CommentPostButton />
        <SharePostButton />
      </div>
      {/* Grupo SavePost */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <SavePostButton />
      </div>
    </div>
  );
}

// Exemplo de componentes de botões (implemente conforme necessário)
function SavePostButton() {
  return (
    <button type="button" aria-label="Salvar post">
      💾
    </button>
  );
}

function LikePostButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={liked}
      aria-label="Curtir post"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "20px"
      }}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}

function CommentPostButton() {
  return (
    <button type="button" aria-label="Comentar post">
      💬
    </button>
  );
}

function SharePostButton() {
  return (
    <button type="button" aria-label="Compartilhar post">
      🔗
    </button>
  );
}

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
}

function PostItem({ post }: { post: Post }) {
  const [likes, setLikes] = useState(post.numberOfLikes);

  useEffect(() => {
    // Gera likes apenas no cliente
    setLikes(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "550px",
        backgroundColor: "white",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        borderRadius: "4px"
      }}
    >
      <div className="headerCard flex justify-between" style={{ width: "100%", height: "68px", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#000" }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eee",
            border: "2px solid #000"
          }}>
            <Image src={post.avatarUrl} alt="Avatar" width={34} height={34} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <span style={{ fontWeight: "bold" }}>{post.username}</span>
        </div>
        <div className="flex">
          <FollowButton />
          <ExtendsActionButton />
        </div>
      </div>

      <div className="mediaPost" style={{ width: "100%", aspectRatio: "1 / 1", position: "relative", overflow: "hidden", borderRadius: "4px" }}>
        <Image src={post.imageUrl} alt="Post media" fill style={{ objectFit: "cover" }} />
      </div>

      <ButtonsActionPost />

      <div style={{ width: "100%", margin: "8px 0", color: "#000" }}>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span>👍</span>
            <span style={{ fontWeight: "bold" }}>{likes}</span>
            <span>Curtidas</span>
          </li>
        </ul>
        <div style={{ marginTop: "8px", color: "#333" }}>
          <span>{post.description}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const generatedPosts = Array.from({ length: 20 }, (_, i) => ({
      username: `usuario${i + 1}`,
      avatarUrl: "https://i.pravatar.cc/150?img=" + (i + 1),
      imageUrl: `https://picsum.photos/seed/post${i + 1}/500/500`,
      numberOfLikes: Math.floor(Math.random() * 1000),
      description: `Essa é a descrição do post número ${i + 1}.`,
    }));
    setPosts(generatedPosts);
  }, []);

  if (!posts) return <p>Carregando posts...</p>;

  return (
    <main style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ul className="scrollerFeed p-4 flex" style={{ width: "100%", height: "100%", alignItems: "center", gap: "2rem", overflowY: "scroll", display: "flex", flexDirection: "column" }}>
        {posts.map((post, index) => (
          <li key={index} style={{ width: "100%", maxWidth: "550px" }}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}