function tw2cn(text) {
    const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });
    try {
        return converter(text);
    } catch {
        showToast(`繁體轉簡體時出現問題 ${err}`, 'error');
    }
}
