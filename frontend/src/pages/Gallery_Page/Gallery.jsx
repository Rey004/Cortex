import React, { useState, useEffect } from 'react'
import './gallery.css'
import SearchBar from './components/SearchBar/SearchBar'
import MasonryGrid from './components/MasonryGrid/MasonryGrid'
import Lightbox from './components/Lightbox/Lightbox'

// Mock data - replace with actual API call to database
const mockGalleryImages = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300/400?random=1',
    prompt: 'A majestic mountain landscape with ethereal lighting, digital art, highly detailed',
    creator: 'ArtistPro',
    style: 'Digital Art',
    likes: 234,
    createdAt: '2 hours ago'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/300/500?random=2',
    prompt: 'Cyberpunk cityscape at night with neon lights and flying cars',
    creator: 'CyberCreator',
    style: 'Cyberpunk',
    likes: 456,
    createdAt: '4 hours ago'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/300/350?random=3',
    prompt: 'Fantasy castle in the clouds, magical atmosphere, concept art',
    creator: 'FantasyMaster',
    style: 'Fantasy',
    likes: 789,
    createdAt: '6 hours ago'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/300/600?random=4',
    prompt: 'Portrait of a wise old wizard with mystical powers, photorealistic',
    creator: 'PortraitKing',
    style: 'Portrait',
    likes: 321,
    createdAt: '8 hours ago'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/300/450?random=5',
    prompt: 'Abstract geometric patterns with vibrant colors and fluid dynamics',
    creator: 'AbstractArt',
    style: 'Abstract',
    likes: 567,
    createdAt: '10 hours ago'
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/300/380?random=6',
    prompt: 'Steampunk mechanical dragon with brass gears and steam',
    creator: 'SteamPunkArt',
    style: 'Steampunk',
    likes: 445,
    createdAt: '12 hours ago'
  },
  {
    id: 7,
    imageUrl: 'https://picsum.photos/300/320?random=7',
    prompt: 'Minimalist architecture with clean lines and modern design',
    creator: 'ArchViz',
    style: 'Architecture',
    likes: 298,
    createdAt: '14 hours ago'
  },
  {
    id: 8,
    imageUrl: 'https://picsum.photos/300/480?random=8',
    prompt: 'Surreal dreamscape with floating islands and ethereal creatures',
    creator: 'DreamArtist',
    style: 'Surreal',
    likes: 672,
    createdAt: '16 hours ago'
  },
  {
    id: 9,
    imageUrl: 'https://picsum.photos/300/340?random=9',
    prompt: 'Vintage poster design with retro typography and bold colors',
    creator: 'RetroDesign',
    style: 'Vintage',
    likes: 413,
    createdAt: '18 hours ago'
  },
  {
    id: 10,
    imageUrl: 'https://picsum.photos/300/520?random=10',
    prompt: 'Underwater coral reef teeming with colorful marine life',
    creator: 'OceanExplorer',
    style: 'Nature',
    likes: 556,
    createdAt: '20 hours ago'
  },
  {
    id: 11,
    imageUrl: 'https://picsum.photos/300/360?random=11',
    prompt: 'Space station orbiting a distant planet with nebula in background',
    creator: 'SpaceArtist',
    style: 'Sci-Fi',
    likes: 789,
    createdAt: '22 hours ago'
  },
  {
    id: 12,
    imageUrl: 'https://picsum.photos/300/440?random=12',
    prompt: 'Traditional Japanese garden with cherry blossoms and koi pond',
    creator: 'ZenMaster',
    style: 'Traditional',
    likes: 634,
    createdAt: '1 day ago'
  }
]

const Gallery = () => {
  const [images, setImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
 

  // Simulate API call to fetch images
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      // TODO: Replace with actual API call
      // const response = await fetch('/api/gallery/images')
      // const data = await response.json()
      
      // Simulate network delay
      setTimeout(() => {
        setImages(mockGalleryImages)
        setFilteredImages(mockGalleryImages)
        setLoading(false)
      }, 1000)
    }

    fetchImages()
  }, [])

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setFilteredImages(images)
    } else {
      const filtered = images.filter(image => 
        image.prompt.toLowerCase().includes(query.toLowerCase()) ||
        image.creator.toLowerCase().includes(query.toLowerCase()) ||
        image.style.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredImages(filtered)
    }
  }

  // Handle image click to open lightbox
  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Load more images (infinite scroll simulation)
  const loadMoreImages = () => {
    // TODO: Implement actual infinite scroll with API
    console.log('Loading more images...')
  }

  return (
    <div className="gallery-page">
      {/* Scan Line Effect */}
      <div className="scan-line"></div>
      
      {/* Decorative Corner Elements */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      
      <div className="gallery-container">
        {/* Header Section */}
        <div className="gallery-header">
          <h1>Discover <span className="highlight">AI Art</span></h1>
          <p>Explore the limitless creativity of our <span className="accent">community</span> and get inspired by stunning AI-generated masterpieces</p>
        </div>

        {/* Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search prompts, styles, creators..."
          value={searchQuery}
        />

        {/* Gallery Grid */}
        <MasonryGrid 
          images={filteredImages}
          onImageClick={handleImageClick}
          loading={loading}
          onLoadMore={loadMoreImages}
        />

        {/* Lightbox Modal */}
        {selectedImage && (
          <Lightbox 
            isOpen={true}
            image={selectedImage}
            onClose={closeLightbox}
          />
        )}
      </div>
    </div>
  )
}

export default Gallery
