export class Utils {
    public static normalizeString(text: string): string {
        return text
            .replace(/\s+/g, ' ')        // spacje, nowe linie, taby → jedna spacja
            .replace(/[`´‘’]/g, "'")     // różne apostrofy → '
            .replace(/\\'/g, "'")        // \' → '
            .replace(/&nbsp;/g, ' ')     // NBSP → spacja
            .replace(/&amp;/g, '&')      // &amp; → &
            .replace(/&lt;/g, '<')       // &lt; → <
            .replace(/&gt;/g, '>')       // &gt; → >
            .replace(/&quot;/g, '"')     // &quot; → "
            .replace(/>\s+</g, '><')     // spacje między tagami
            .trim();
    }
}
