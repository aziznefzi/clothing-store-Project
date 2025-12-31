import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: "#1de9b6",
        },
        wbsiteTheme: mode === "dark" ? 
        {
          background: {
            default: "#121212",
            paper: "#1e1e1e",
            bg1: "#000",
            bg2: "#111",
            bg3: "#222",
            bg4: "#333",
            bg5: "#444",
            bg6: "#555",
            bg7: "#666",
            bg8: "#777",
            bg9: "#888",
            bg10: "#999",
            bg11: "#aaa",
            bg12: "#bbb",
            bg13: "#ccc",
            bg14: "#ddd",
            bg15: "#eee",
            bg16: "#fff",
            headerBg: "#1de9b626",
          },
          text: {
                text1: "#fff",
                text2: "#eee",
                text3: "#ddd",
                text4: "#ccc",
                text5: "#bbb",
                text6: "#aaa",
                text7: "#999",
                text8: "#888",
                text9: "#777",
                text10: "#666",
                text11: "#555",
                text12: "#444",
                text13: "#333",
                text14: "#222",
                text15: "#111",
                text16: "#000",
                text17: "#1de9b6"
              },
              border: {
                borderHeader: "#0bffc277",
              }
        }
        : 
        {
            background: {
                default: "#fff",
                paper: "#fff",
                bg1: "#fff",
                bg2: "#eee",
                bg3: "#ddd",
                bg4: "#ccc",
                bg5: "#bbb",
                bg6: "#aaa",
                bg7: "#999",
                bg8: "#888",
                bg9: "#777",
                bg10: "#666",
                bg11: "#555",
                bg12: "#444",
                bg13: "#333",
                bg14: "#222",
                bg15: "#111",
                bg16: "#000",
                headerBg: "#558b2f2d",
              },
              text: {
               text1: "#000",
               text2: "#111",
               text3: "#222",
               text4: "#333",
               text5: "#444",
               text6: "#555",
               text7: "#666",
               text8: "#777",
               text9: "#888",
               text10: "#999",
               text11: "#aaa",
               text12: "#bbb",
               text13: "#ccc",
               text14: "#ddd",
               text15: "#eee",
               text16: "#fff",
               text17: "#558b2f"
              },
              border: {
                borderHeader: "#0c5d4997",
              }
        },
    },
});
