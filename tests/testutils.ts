import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";

export const expectEvents = (events, want) => {
  if (events === undefined) {
    expect(undefined).toBe(want);
  }

  for (const [index, event] of events.entries()) {
    expect(event._eventname).toBe(want[index].name);
    const wantParams = scillaJSONParams(want[index].params);
    expect(JSON.stringify(event.params)).toBe(JSON.stringify(wantParams));
  }
};
