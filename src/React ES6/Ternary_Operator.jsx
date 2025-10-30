// Example : Before
if (authenticated) {
    renderApp();
} else {
    renderLogin();
}

// Example : Ternary
authendicated ? renderApp() : renderLogin();