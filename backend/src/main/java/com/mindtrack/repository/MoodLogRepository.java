package com.mindtrack.repository;

import com.mindtrack.entity.MoodLog;
import com.mindtrack.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface MoodLogRepository extends JpaRepository<MoodLog, Long> {
    List<MoodLog> findByUserIdAndDateBetween(Long userId, LocalDate start, LocalDate end);

    List<MoodLog> findByUser(User user);
}
