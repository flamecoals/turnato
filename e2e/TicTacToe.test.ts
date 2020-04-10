beforeAll(async () => {
  await page.goto(baseURL + '/play/tictactoe/local');
});

it('plays a local game', async () => {
  await expect(page).toMatch("Red's turn");
  let x: number, y: number;
  [x, y] = [0, 0];
  await page.click(`[x="${x}"][y="${y}"]`);
  //      |     |
  //   X  |  -  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  //      |     |

  await expect(page).toMatch("Green's turn");

  [x, y] = [1, 0];
  await page.click(`[x="${x}"][y="${y}"]`);
  //      |     |
  //   X  |  O  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  //      |     |

  [x, y] = [1, 1];
  await page.click(`[x="${x}"][y="${y}"]`);
  //      |     |
  //   X  |  O  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  X  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  //      |     |

  [x, y] = [2, 0];
  await page.click(`[x="${x}"][y="${y}"]`);
  //      |     |
  //   X  |  O  |  O
  // _____|_____|_____
  //      |     |
  //   -  |  X  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  -
  //      |     |

  [x, y] = [2, 2];
  await page.click(`[x="${x}"][y="${y}"]`);
  //      |     |
  //   X  |  O  |  O
  // _____|_____|_____
  //      |     |
  //   -  |  X  |  -
  // _____|_____|_____
  //      |     |
  //   -  |  -  |  X
  //      |     |

  await expect(page).toMatch('red won');
  await expect(page).toMatch('Games'); // more games
  await expect(page).toMatch('Play Again'); // more games
});

export {};
