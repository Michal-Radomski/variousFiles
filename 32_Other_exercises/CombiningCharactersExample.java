public class CombiningCharactersExample {
    public static void main(String[] args) {
        // Base letter 'M'
        String base = "M";

        // Combining diacritical marks (Unicode combining characters)
        // Example: Combining Long Stroke Overlay (U+0336), Combining Tilde (U+0303), Combining Dot Below (U+0323)
        String combiningMarks = "\u0336\u0303\u0323";

        // Combine base letter with combining marks
        String combined = base + combiningMarks;

        // Print the combined string
        System.out.println("Combined character: " + combined);

        // Print a stylized word with multiple letters and combining marks
        String word = "M\u0336\u0303\u0323i\u0337\u0300c\u0334h\u0335a\u0336l\u0337";
        System.out.println("Stylized word: " + word);
    }
}
