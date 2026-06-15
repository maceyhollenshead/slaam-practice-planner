const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, BorderStyle, WidthType,
  ShadingType, VerticalAlign, HeightRule, TabStopType, TabStopPosition,
} = require("docx");

// ---- SLAAM brand palette ----
const PINK = "FF2D8E";
const LIME = "C6FF1A";
const INK = "111111";
const GREY = "555555";
const WHITE = "FFFFFF";

const CONTENT_W = 9360; // US Letter, 1" margins

const pageProps = {
  page: {
    size: { width: 12240, height: 15840 },
    margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 },
  },
};

const numbering = {
  config: [
    {
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "▪",
        alignment: AlignmentType.LEFT,
        style: { run: { color: PINK }, paragraph: { indent: { left: 360, hanging: 220 } } },
      }],
    },
    {
      reference: "bullets2",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "▪",
        alignment: AlignmentType.LEFT,
        style: { run: { color: PINK }, paragraph: { indent: { left: 360, hanging: 220 } } },
      }],
    },
  ],
};

const styles = {
  default: { document: { run: { font: "Arial", size: 20, color: INK } } },
};

// ---- helpers ----
function banner(title, subtitle) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: noBorders(),
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            shading: { fill: PINK, type: ShadingType.CLEAR, color: "auto" },
            margins: { top: 160, bottom: 160, left: 220, right: 220 },
            children: [
              new Paragraph({
                spacing: { after: 20 },
                children: [new TextRun({ text: title, bold: true, color: WHITE, size: 40 })],
              }),
              new Paragraph({
                children: [new TextRun({ text: subtitle, bold: true, color: LIME, size: 22, allCaps: true })],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}

function thinBorders(color) {
  const b = { style: BorderStyle.SINGLE, size: 4, color: color || "DDDDDD" };
  return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b };
}

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: LIME, space: 2 } },
    children: [new TextRun({ text, bold: true, color: INK, size: 24, allCaps: true })],
  });
}

function identityLine() {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 80 },
    children: [new TextRun({
      text: "Loud.  Fearless.  Unbreakable.      •      412 Pittsburgh Built      •      Girls Hoop Different",
      bold: true, color: GREY, size: 18, allCaps: true,
    })],
  });
}

function brandFooter() {
  return new Footer({
    children: [
      new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 8, color: PINK, space: 4 } },
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        children: [
          new TextRun({ text: "SLAAM Basketball  •  Pittsburgh, PA  •  @SLAAMBASKETBALL", color: GREY, size: 16 }),
          new TextRun({ text: "\tPowered by ", color: GREY, size: 16 }),
          new TextRun({ text: "NextEdge", bold: true, color: PINK, size: 16 }),
        ],
      }),
    ],
  });
}

// =====================================================================
// DOC 1 — THE SLAAM STANDARD
// =====================================================================
const NON_NEGOTIABLES = [
  ["Real Coaching", "We teach every rep. No lazy drills, no babysitting — she leaves practice better than she came."],
  ["A Path Forward", "Every athlete has a plan and knows her next step. We build players, not just rosters."],
  ["Eyes On Her", "Real exposure. We put our players in front of the people who matter and let the work show."],
  ["A Sisterhood", "We build a team that protects each other on and off the floor. Nobody gets left behind."],
  ["Accountability", "The standard is the standard — for players and coaches. We do what we say we’ll do."],
  ["A Hometown Identity", "We rep the 412. We out-work and out-compete, and we carry Pittsburgh everywhere we go."],
];

function nonNegotiablesTable() {
  const labelW = 2700, descW = CONTENT_W - labelW;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [labelW, descW],
    borders: thinBorders("E5E5E5"),
    rows: NON_NEGOTIABLES.map(([name, desc], i) =>
      new TableRow({
        children: [
          new TableCell({
            width: { size: labelW, type: WidthType.DXA },
            shading: { fill: i % 2 ? "FFF0F7" : WHITE, type: ShadingType.CLEAR, color: "auto" },
            verticalAlign: VerticalAlign.CENTER,
            margins: { top: 80, bottom: 80, left: 140, right: 120 },
            children: [new Paragraph({ children: [
              new TextRun({ text: (i + 1) + ".  ", bold: true, color: PINK, size: 20 }),
              new TextRun({ text: name, bold: true, color: INK, size: 20 }),
            ] })],
          }),
          new TableCell({
            width: { size: descW, type: WidthType.DXA },
            shading: { fill: i % 2 ? "FFF0F7" : WHITE, type: ShadingType.CLEAR, color: "auto" },
            verticalAlign: VerticalAlign.CENTER,
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: desc, size: 19, color: INK })] })],
          }),
        ],
      })
    ),
  });
}

function bullet(ref, text) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, size: 20 })],
  });
}

const standardDoc = new Document({
  styles, numbering,
  sections: [{
    properties: pageProps,
    footers: { default: brandFooter() },
    children: [
      banner("THE SLAAM STANDARD", "Built Different. Play Different."),
      identityLine(),
      sectionHeading("Who We Are"),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "SLAAM is a Pittsburgh-built girls’ basketball program for athletes who want more than a season. " +
                "We don’t hide players — we develop them. Real coaching, real exposure, year-round. " +
                "This is the standard every SLAAM coach and player is held to, in every gym we walk into.",
          size: 20,
        })],
      }),
      sectionHeading("Our Six Non-Negotiables"),
      nonNegotiablesTable(),
      sectionHeading("How We Coach — The SLAAM Way"),
      bullet("bullets", "We develop position-less players — every athlete handles, passes, defends, and finishes."),
      bullet("bullets", "No lazy drills. Every drill has a purpose, a standard, and a coaching point."),
      bullet("bullets", "We don’t play weekend zone. We guard, we compete, and we get better in live reps."),
      bullet("bullets", "We coach loud, fearless, and unbreakable — and we expect the same from our players."),
      sectionHeading("The Coach’s Job"),
      bullet("bullets2", "Run the SLAAM practice format every session: Warm-Up → Skill → Compete → Team → Close."),
      bullet("bullets2", "Teach the same language and the same standards across every team and every age group."),
      bullet("bullets2", "Pull from the SLAAM Drill Library so every gym looks and sounds like SLAAM."),
      bullet("bullets2", "Leave a plan and a note after every practice — what we worked on, and what got better."),
    ],
  }],
});

// =====================================================================
// DOC 2 — SLAAM PRACTICE PLAN (fillable)
// =====================================================================
function labelCell(text, w) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { fill: LIME, type: ShadingType.CLEAR, color: "auto" },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 70, bottom: 70, left: 120, right: 100 },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: INK, size: 17, allCaps: true })] })],
  });
}
function blankCell(w) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 70, bottom: 70, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })],
  });
}

function infoTable() {
  const L = 1700, V = 2980;
  const rows = [
    ["Team / Age", "Date"],
    ["Focus / Theme", "Duration"],
    ["Coach", "Location"],
  ];
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [L, V, L, V],
    borders: thinBorders("CCCCCC"),
    rows: rows.map(([a, b]) => new TableRow({
      height: { value: 460, rule: HeightRule.ATLEAST },
      children: [labelCell(a, L), blankCell(V), labelCell(b, L), blankCell(V)],
    })),
  });
}

const PLAN_BLOCKS = [
  "Dynamic Warm-Up",
  "Skill Development (ball-handling / finishing / shooting)",
  "Competition / Small-Sided",
  "Team Offense",
  "Team Defense",
  "Situational (BLOB / SLOB / press / late-clock)",
  "Compete-to-Close / Conditioning",
  "Cool-Down & Message",
];

function planTable() {
  const cw = [1050, 760, 3050, 2700, 1800]; // = 9360
  const head = ["Time", "Min", "Block", "Drill / Focus", "Coaching Points"];
  const headerRow = new TableRow({
    tableHeader: true,
    children: head.map((h, i) => new TableCell({
      width: { size: cw[i], type: WidthType.DXA },
      shading: { fill: PINK, type: ShadingType.CLEAR, color: "auto" },
      margins: { top: 60, bottom: 60, left: 110, right: 110 },
      children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: WHITE, size: 17, allCaps: true })] })],
    })),
  });
  const bodyRows = PLAN_BLOCKS.map((b, idx) => new TableRow({
    height: { value: 620, rule: HeightRule.ATLEAST },
    children: [
      blankCell(cw[0]),
      blankCell(cw[1]),
      new TableCell({
        width: { size: cw[2], type: WidthType.DXA },
        shading: { fill: idx % 2 ? "F7F7F7" : WHITE, type: ShadingType.CLEAR, color: "auto" },
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 70, bottom: 70, left: 110, right: 110 },
        children: [new Paragraph({ children: [new TextRun({ text: b, bold: true, size: 18, color: INK })] })],
      }),
      blankCell(cw[3]),
      blankCell(cw[4]),
    ],
  }));
  // total row
  const totalRow = new TableRow({
    children: [
      new TableCell({
        width: { size: cw[0], type: WidthType.DXA },
        margins: { top: 60, bottom: 60, left: 110, right: 110 },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "TOTAL", bold: true, size: 17 })] })],
      }),
      new TableCell({
        width: { size: cw[1], type: WidthType.DXA },
        shading: { fill: LIME, type: ShadingType.CLEAR, color: "auto" },
        children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })],
      }),
      new TableCell({
        width: { size: cw[2] + cw[3] + cw[4], type: WidthType.DXA },
        columnSpan: 3,
        margins: { top: 60, bottom: 60, left: 110, right: 110 },
        children: [new Paragraph({ children: [new TextRun({ text: "minutes", italics: true, color: GREY, size: 17 })] })],
      }),
    ],
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: cw,
    borders: thinBorders("CCCCCC"),
    rows: [headerRow, ...bodyRows, totalRow],
  });
}

const planDoc = new Document({
  styles, numbering,
  sections: [{
    properties: pageProps,
    footers: { default: brandFooter() },
    children: [
      banner("SLAAM PRACTICE PLAN", "Built Different. Play Different."),
      new Paragraph({ spacing: { after: 120 } }),
      infoTable(),
      new Paragraph({
        spacing: { before: 160, after: 100 },
        children: [
          new TextRun({ text: "TODAY’S SLAAM FOCUS  (circle): ", bold: true, size: 18, color: INK }),
          new TextRun({ text: "  Skill   •   Competition   •   Team Offense   •   Team Defense   •   Culture", size: 18, color: GREY }),
        ],
      }),
      planTable(),
      new Paragraph({
        spacing: { before: 200, after: 40 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: "CCCCCC", space: 6 } },
        children: [new TextRun({ text: "WHAT GOT BETTER TODAY: ", bold: true, size: 18, color: PINK })],
      }),
      new Paragraph({
        spacing: { before: 160 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: "CCCCCC", space: 6 } },
        children: [new TextRun({ text: "", size: 18 })],
      }),
    ],
  }],
});

// ---- write ----
(async () => {
  fs.writeFileSync("SLAAM_Standard.docx", await Packer.toBuffer(standardDoc));
  fs.writeFileSync("SLAAM_Practice_Plan.docx", await Packer.toBuffer(planDoc));
  console.log("wrote SLAAM_Standard.docx and SLAAM_Practice_Plan.docx");
})();
