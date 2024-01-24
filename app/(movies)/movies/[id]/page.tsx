import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <Suspense fallback={<h6>Loading movie info</h6>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>Movie Videos</h2>
      <Suspense fallback={<h6>Loading movie videos</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
