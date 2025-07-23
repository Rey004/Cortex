import React, { useState } from 'react'
import Button from '../../../../components/Button/Button'
import './promptInput.css'

const PromptInput = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim() && !isLoading) {
      onGenerate(prompt)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="prompt-input-section">
      <div className="prompt-container">
        <form onSubmit={handleSubmit} className="prompt-form">
          <div className="input-wrapper">
            <label htmlFor="prompt" className="prompt-label">
              Prompt
            </label>
            <div className="input-field-container">
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., A crystalline fox in a synthwave forest, cinematic lighting"
                className="prompt-input"
                rows="3"
                disabled={isLoading}
              />
              <div className="input-decoration"></div>
            </div>
          </div>
          
          <Button 
            name={isLoading ? "Generating..." : "Generate"}
            onClick={handleSubmit}
            disabled={!prompt.trim() || isLoading}
            variant="primary"
          />
        </form>
      </div>
    </div>
  )
}

export default PromptInput
