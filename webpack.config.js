{
    test: /\.(js|jsx)$/,
    exclude: /node_modules\/(?!(twilio-paste)\/).*/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-optional-chaining']
        }
    }
}