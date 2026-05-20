-- Run once if upcoming_events already exists without venue
alter table upcoming_events
  add column if not exists venue text;
