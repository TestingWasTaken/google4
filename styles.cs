body {
    background-color: #0d0d0d;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.dashboard {
    text-align: center;
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

h1 {
    margin-bottom: 20px;
}

.terminal {
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
    box-shadow: inset 0 0 10px #00ff00;
    text-align: left;
}

#output {
    height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    color: #00ff00;
}

#commandInput {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #333;
    border: none;
    color: #00ff00;
    font-size: 16px;
    border-radius: 5px;
}

.controls {
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    margin: 5px;
    background-color: #00ff00;
    border: none;
    color: #0d0d0d;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #00cc00;
}
