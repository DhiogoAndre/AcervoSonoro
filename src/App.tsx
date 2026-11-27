import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SectionHeading } from "./components/SectionHeading";
import { FilterList, type Filter } from "./components/FilterList";
import { AlbumGrid } from "./components/AlbumGrid";
import { BandList } from "./components/BandList";
import { Footer } from "./components/Footer";
import { BANDS } from "./data/catalog";
import { useAlbums } from "./cases/albums/hooks/use-albums";

function App() {
  const { albums, loading: isLoading, error, reload } = useAlbums();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");


  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredAlbums =
    activeFilter === "Todos"
      ? albums
      : albums.filter((album: { genre: string }) => album.genre === activeFilter);

  return (
    <div className="app-shell">
      <Header favoriteCount={favorites.length} />

      <main>
        <Hero />

        <div className="content-layout">
          <section
            className="albums-section"
            id="albuns"
            aria-labelledby="albums-title"
          >
            <SectionHeading
              id="albums-title"
              title="Álbuns para descobrir"
              subtitle={
                isLoading
                  ? "Buscando álbuns na coleção..."
                  : error
                    ? "A coleção está temporariamente indisponível"
                    : `${filteredAlbums.length} álbuns na coleção`
              }
            />
            <FilterList
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {isLoading && (
              <p className="status-message loading-message" role="status">
                <span className="loading-spinner" aria-hidden="true" />
                Carregando álbuns...
              </p>
            )}

            {!isLoading && error && (
              <div className="status-message error-message" role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  className="retry-button"
                  onClick={reload}
                >
                  Tentar novamente
                </button>
              </div>
            )}

            {!isLoading && !error && filteredAlbums.length > 0 && (
              <AlbumGrid
                albums={filteredAlbums}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            )}

            {!isLoading && !error && filteredAlbums.length === 0 && (
              <p className="status-message empty-message">
                Nenhum álbum encontrado para este gênero.
              </p>
            )}
          </section>

          <section
            className="bands-section"
            id="bandas"
            aria-labelledby="bands-title"
          >
            <SectionHeading
              id="bands-title"
              title="Bandas em Destaque"
              subtitle="3 artistas para conhecer"
            />
            <BandList bands={BANDS} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
