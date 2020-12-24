import { segments, segmentNames } from '../../util/segmentConfigs';

it('should have other_part', () => {
    expect(segments).toContain('other_race');
});

it('should have hispanic propery', () => {
    expect(segmentNames.hispanic).toBe('Hispanic');
});