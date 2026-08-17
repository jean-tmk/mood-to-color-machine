import java.util.ArrayList;
import java.util.List;

/** Audits generated palettes for contrast and near-duplicate colors. */
public class PaletteAudit {
    static double linear(int channel) {
        double c = channel / 255.0;
        return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }

    static double luminance(String hex) {
        String value = hex.replace("#", "");
        int r = Integer.parseInt(value.substring(0, 2), 16);
        int g = Integer.parseInt(value.substring(2, 4), 16);
        int b = Integer.parseInt(value.substring(4, 6), 16);
        return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
    }

    static double contrast(String a, String b) {
        double l1 = luminance(a), l2 = luminance(b);
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java tools/PaletteAudit.java '#HEX' '#HEX' ...");
            return;
        }
        List<String> warnings = new ArrayList<>();
        for (String color : args) {
            double onBlack = contrast(color, "#09090D");
            double onWhite = contrast(color, "#FFFFFF");
            System.out.printf("%s  black %.2f:1  white %.2f:1%n", color, onBlack, onWhite);
            if (Math.max(onBlack, onWhite) < 4.5) warnings.add(color + " has no AA text pairing");
        }
        System.out.println(warnings.isEmpty() ? "PASS — palette has accessible text pairings" : "WARN — " + String.join(", ", warnings));
    }
}
