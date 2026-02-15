package com.mindtrack.service;

import com.mindtrack.entity.MoodLog;
import com.mindtrack.entity.User;
import com.mindtrack.repository.MoodLogRepository;
import com.mindtrack.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MoodService {

    private final MoodLogRepository moodLogRepository;
    private final UserRepository userRepository;

    public MoodLog createMood(MoodLog moodLog) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        moodLog.setUser(user);
        moodLog.setDate(LocalDate.now());
        return moodLogRepository.save(moodLog);
    }

    public List<MoodLog> getUserMoods() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return moodLogRepository.findByUser(user);
    }
}
