/* 基本樣式 */
#sortable {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--gap-size, 1rem);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  #sortable.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .tabs {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    background-color: var(--main-bg-color, rgba(40, 40, 40, 0.6));
    padding: 0.5rem 1rem;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1rem;
  }
  
  .tabs .tab {
    background-color: rgba(60, 60, 60, 0.7);
    padding: 0.5rem 1rem;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.3s ease;
  }
  
  .tabs .tab.active {
    background-color: var(--highlight-color, #4caf50);
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .tabs .tab:hover {
    background-color: rgba(90, 90, 90, 0.8);
    color: rgba(255, 255, 255, 1);
  }
  
  .tabs .tab:active {
    transform: scale(0.95);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .tags-container {
    flex: 1;
    background-color: var(--main-bg-color, rgba(255, 255, 255, 0.4));
    border-radius: 0 0 10px 10px;
    opacity: 0;
    transform: scale(0.95);
    display: none;
    padding: 1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .tags-container.active {
    display: grid;
    opacity: 1;
    transform: scale(1);
    grid-template-columns: repeat(2, 50%);
  }
  
  /* 響應式設計 */
  @media (max-width: 680px) {
    #sortable {
      justify-content: center;
    }
  
    .tabs {
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .tags-container.active {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  
    .tabs .tab {
      font-size: 0.9rem;
    }
  
    .tags-container {
      padding: 0.5rem;
    }
  }
  
  @media (min-width: 681px) and (max-width: 1024px) {
    #sortable {
      gap: 1.5rem;
      justify-content: space-around;
    }
  
    .tags-container.active {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 1025px) {
    .tags-container.active {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  /* Config 按鈕樣式 */
  #config-buttons {
    position: fixed;
    bottom: 50%;
    transform: translateY(50%);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: var(--button-shadow, rgba(0, 0, 0, 0.3)) -1px 0 20px 5px;
    background: linear-gradient(135deg, rgba(40, 40, 40, 0.6), rgba(20, 20, 20, 0.4));
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  #config-buttons a {
    background: none;
    outline: none;
  }
  
  #config-buttons a:focus {
    outline: 2px dashed rgba(255, 255, 255, 0.8);
    outline-offset: 4px;
  }
  
  #config-buttons a svg {
    transition: all 0.1s ease-in-out;
    color: rgba(255, 255, 255, 0.5);
  }
  
  #config-buttons a:hover svg {
    transform: scale(1.15) rotate(10deg);
    color: rgba(255, 255, 255, 0.95);
  }
  
  /* 深色模式支援 */
  @media (prefers-color-scheme: dark) {
    :root {
      --main-bg-color: rgba(40, 40, 40, 0.6);
      --button-bg-color: rgba(20, 20, 20, 0.4);
      --button-shadow: rgba(0, 0, 0, 0.3);
      --highlight-color: #4caf50;
    }
  
    .tabs .tab {
      color: rgba(255, 255, 255, 0.8);
    }
  
    .tags-container {
      color: rgba(255, 255, 255, 0.8);
    }
  }
